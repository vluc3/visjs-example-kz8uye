import { Component, VERSION, ViewChild, ViewChildren, ElementRef, OnInit, ViewContainerRef, AfterViewInit } from '@angular/core';

import { DataSet, VisNetworkService, VisNetworkDirective} from 'ngx-vis';

const edgeChildren = {
  color:'#848484',
  highlight:'#848484',
  hover: '#848484',
  inherit: 'from',
  opacity:1.0
}

const edgeParent = {
  color:'#99004d',
  highlight:'#800040',
  hover: '#800040',
  inherit: 'from',
  opacity:1.0
}

const nodeConfig = {
  color: '#cc6699',
  shape: 'box',
  size: 20
}

const nodeParentConfig = {
  color: '#660033',
  shape: 'box',
  size: 20
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('box', { read: ElementRef}) el: ElementRef;
  
  svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 -256 1792 1792">' +
        '<g transform="matrix(1,0,0,-1,197.42373,1300.6102)">' +
            '<path d="M 1408,131 Q 1408,11 1335,-58.5 1262,-128 1141,-128 H 267 Q 146,-128 73,-58.5 0,11 0,131 0,184 3.5,234.5 7,285 17.5,343.5 28,402 44,452 q 16,50 43,97.5 27,47.5 62,81 35,33.5 85.5,53.5 50.5,20 111.5,20 9,0 42,-21.5 33,-21.5 74.5,-48 41.5,-26.5 108,-48 Q 637,565 704,565 q 67,0 133.5,21.5 66.5,21.5 108,48 41.5,26.5 74.5,48 33,21.5 42,21.5 61,0 111.5,-20 50.5,-20 85.5,-53.5 35,-33.5 62,-81 27,-47.5 43,-97.5 16,-50 26.5,-108.5 10.5,-58.5 14,-109 Q 1408,184 1408,131 z m -320,893 Q 1088,865 975.5,752.5 863,640 704,640 545,640 432.5,752.5 320,865 320,1024 320,1183 432.5,1295.5 545,1408 704,1408 863,1408 975.5,1295.5 1088,1183 1088,1024 z"/>' +
        '</g>' +
        '</svg>';
  union = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 31.891 31.891" style="enable-background:new 0 0 31.891 31.891;" xml:space="preserve">' +
      '<g>' +
      '	<path d="M30.543,5.74l-4.078-4.035c-1.805-1.777-4.736-1.789-6.545-0.02l-4.525,4.414c-1.812,1.768-1.82,4.648-0.02,6.424' +
      '		l2.586-2.484c-0.262-0.791,0.061-1.697,0.701-2.324l2.879-2.807c0.912-0.885,2.375-0.881,3.275,0.01l2.449,2.42' +
      '		c0.9,0.891,0.896,2.326-0.01,3.213l-2.879,2.809c-0.609,0.594-1.609,0.92-2.385,0.711l-2.533,2.486' +
      '		c1.803,1.781,4.732,1.789,6.545,0.02l4.52-4.41C32.34,10.396,32.346,7.519,30.543,5.74z"/>' +
      '	<path d="M13.975,21.894c0.215,0.773-0.129,1.773-0.752,2.381l-2.689,2.627c-0.922,0.9-2.414,0.895-3.332-0.012l-2.498-2.461' +
      '		c-0.916-0.906-0.91-2.379,0.012-3.275l2.691-2.627c0.656-0.637,1.598-0.961,2.42-0.689l2.594-2.57' +
      '		c-1.836-1.811-4.824-1.82-6.668-0.02l-4.363,4.26c-1.846,1.803-1.855,4.734-0.02,6.549l4.154,4.107' +
      '		c1.834,1.809,4.82,1.818,6.668,0.018l4.363-4.26c1.844-1.805,1.852-4.734,0.02-6.547L13.975,21.894z"/>' +
      '	<path d="M11.139,20.722c0.611,0.617,1.611,0.623,2.234,0.008l7.455-7.416c0.621-0.617,0.625-1.615,0.008-2.234' +
      '		c-0.613-0.615-1.611-0.619-2.23-0.006l-7.457,7.414C10.529,19.103,10.525,20.101,11.139,20.722z"/>' +
      '</g>' +
      '</svg>';

  url = "data:image/svg+xml;charset=utf-8,"+ encodeURIComponent(this.svg);
  urlUnion = "data:image/svg+xml;charset=utf-8,"+ encodeURIComponent(this.union);
  nodes = [
    {id: '1',label: 'JUAN', ...nodeConfig, level: 1, image: this.url, shape: 'image'},
    {id: 'u2', label: '', ...nodeParentConfig, level: 2, image: this.urlUnion, shape: 'image'},
    {id: '3', label: 'CARMEN', ...nodeConfig, level: 1, image: this.url, shape: 'image'},
    {id: '4', label: 'PABLO', ...nodeConfig, level: 3, image: this.url, shape: 'image'},
    {id: 'u5', label: '', ...nodeConfig, level: 4, image: this.urlUnion, shape: 'image'},
    {id: '6', label: 'ROBERTA', ...nodeConfig, level: 3, image: this.url, shape: 'image'},
    {id: '7', label: 'CARLOS', ...nodeConfig, level: 3 , image: this.url, shape: 'image'},
    {id: 'u8', label: '', ...nodeParentConfig, level: 4, image: this.urlUnion, shape: 'image'},
    {id: '9', label: 'ANTONIA', ...nodeConfig, level: 3, image: this.url, shape: 'image'},
    {id: '10', label: 'Pablo Jr.', ...nodeConfig, level: 5, image: this.url, shape: 'image'},
  ];

  edges = [
    {from: '1', to: 'u2', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeParent},
    {from: '3', to: 'u2', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeParent},
    {from: 'u2', to: '4', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeChildren},
    {from: '4', to: 'u5', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeParent},
    {from: '6', to: 'u5', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeParent},
    {from: 'u2', to: '7', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeChildren},
    {from: '7', to: 'u8', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeParent},
    {from: '9', to: 'u8', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeParent},
    {from: 'u8', to: '10', arrows: 'to', physics: false, smooth: {type: 'cubicBezier'}, color: edgeChildren},
  ];

  data = {
    nodes: this.nodes,
    edges: this.edges
  };

  options = {
    layout: {
      hierarchical: {
        enabled: true,
        levelSeparation: 150,
        nodeSpacing: 200,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: 'UD',        // UD, DU, LR, RL
        sortMethod: 'directed',  // hubsize, directed
        shakeTowards: 'leaves'  // roots, leaves
      }
    },
    edges: {
      shadow: true
    },
    nodes: {
      shadow: true
    },
    interaction:{
      hover: true,
    },
    physics: {
      maxVelocity: 10,
      minVelocity: 0.1,
    }
  };

  constructor(private visn: VisNetworkService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const a = this.visn.create("1",this.el.nativeElement, this.data, this.options);
  }
}
