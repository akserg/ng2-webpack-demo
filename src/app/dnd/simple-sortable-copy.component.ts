import {Component} from '@angular/core';

@Component({
    selector: 'simple-sortable-copy',
    template: `
<h4>Simple sortable With Drop into something, without delete it</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-warning"
            dnd-sortable-container [sortableData]="sourceList" [dropZones]="['source-dropZone']">
            <div class="panel-heading">Source List</div>
            <div class="panel-body">
                <ul class="list-group">
                    <li *ngFor="let source of sourceList; let x = index" class="list-group-item"
                        dnd-sortable [sortableIndex]="x" [dragEnabled]="true"
                        [dragData]="source">{{source.name}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="panel panel-info">
            <div class="panel-heading">Target List</div>
            <div class="panel-body" dnd-droppable (onDropSuccess)="addTo($event)" [dropZones]="['source-dropZone']">
                <ul class="list-group">
                    <li *ngFor="let target of targetList" class="list-group-item">
                        {{target.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`
})
export class SimpleSortableCopyComponent {

    sourceList: Widget[] = [
        new Widget('1'), new Widget('2'),
        new Widget('3'), new Widget('4'),
        new Widget('5'), new Widget('6')
    ];

    targetList: Widget[] = [];
    addTo($event: any) {
        this.targetList.push($event.dragData);
    }
}

class Widget {
  constructor(public name: string) {}
}