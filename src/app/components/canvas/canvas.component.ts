import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css',
})
export class CanvasComponent implements AfterViewInit {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;
  private pointLight!: THREE.PointLight;
  private lightHelper!: THREE.Mesh;
  private mouse: { x: number; y: number } = { x: 0, y: 0 };

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document | null,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.document) {
      this.initScene();
      this.animate();

      this.renderer2.listen('window', 'mousemove', (event) => {
        this.mouse.x =
          (event.clientX / this.document!.defaultView!.innerWidth) * 2 - 1;
        this.mouse.y =
          -(event.clientY / this.document!.defaultView!.innerHeight) * 2 + 1;
      });

      if (this.scene && this.pointLight) {
        this.scene.add(this.pointLight);
        this.scene.add(this.lightHelper);
      }
    }
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.document!.defaultView!.innerWidth /
        this.document!.defaultView!.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.el.nativeElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshNormalMaterial({
      opacity: 0.5, // Set the initial opacity
      transparent: true, // Enable transparency
      side: THREE.DoubleSide, // Ensure both sides of the geometry are rendered
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.pointLight = new THREE.PointLight(0xffffff, 10, 100, 0);
    this.scene.add(ambientLight);
  }

  speed = 0.17;

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    if (this.cube) {
      this.cube.rotation.x -= 0.01;
      this.cube.rotation.y += 0.01;
    }
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }

    if (this.document && this.pointLight && this.lightHelper) {
      // Update the position of the point light and its helper sphere
      this.pointLight.position.set(this.mouse.x * 20, this.mouse.y * 20, 20);
      this.lightHelper.position.copy(this.pointLight.position);
    }
  }
}
