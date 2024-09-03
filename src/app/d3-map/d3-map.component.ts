import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';
import { GeoJsonObject, FeatureCollection, Geometry } from 'geojson';

@Component({
  selector: 'app-d3-map',
  templateUrl: './d3-map.component.html',
  styleUrls: ['./d3-map.component.css']
})
export class D3MapComponent implements OnInit {
  constructor(private el: ElementRef, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadGeoJSON();
  }

  loadGeoJSON(): void {
    this.http.get<FeatureCollection<Geometry>>('assets/geojson/ne_110m_admin_0_countries.geojson').subscribe({
      next: (geoData) => this.createMap(geoData),
      error: (error) => console.error('Error loading the geoJSON data', error)
    });
  }

  createMap(geoData: FeatureCollection<Geometry>): void {
    const width = 800;
    const height = 600;

    const svg = d3.select(this.el.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const projection = d3.geoMercator()
      .scale(150)
      .translate([width / 2, height / 1.5]);

    const path = d3.geoPath().projection(projection);

    svg.selectAll('path')
      .data(geoData.features)
      .enter()
      .append('path')
      .attr('d', (d) => path(d as any))  // Cast to 'any' if specific typing fails
      .attr('fill', '#69b3a2')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.5);
  }
}
