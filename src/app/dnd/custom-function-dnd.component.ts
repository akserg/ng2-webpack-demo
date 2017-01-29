import { Component } from '@angular/core';

@Component({
    selector: 'custom-function-dnd',
    template: `
<h4>Use a custom function to determine where dropping is allowed</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragData]="6">
                    <div class="panel-body">dragData = 6</div>
                </div>
                <div class="panel panel-default" dnd-draggable [dragData]="10">
                    <div class="panel-body">dragData = 10</div>
                </div>
                <div class="panel panel-default" dnd-draggable [dragData]="30">
                    <div class="panel-body">dragData = 30</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <pre>allowDropFunction(baseInteger: any): any {{ '{' }}
  return (dragData: any) => dragData % baseInteger === 0;
{{ '}' }}</pre>
        <div class="row">
            <div class="col-sm-6">
                <div dnd-droppable class="panel panel-info" [allowDrop]="allowDropFunction(box1Integer)" (onDropSuccess)="addTobox1Items($event)">
                    <div class="panel-heading">
                        Multiples of
                        <input type="number" [(ngModel)]="box1Integer" style="width: 4em">
                        only
                    </div>
                    <div class="panel-body">
                        <div *ngFor="let item of box1Items">dragData = {{item}}</div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div dnd-droppable class="panel panel-warning" [allowDrop]="allowDropFunction(box2Integer)" (onDropSuccess)="addTobox2Items($event)">
                    <div class="panel-heading">
                        Multiples of
                        <input type="number" [(ngModel)]="box2Integer" style="width: 4em">
                        only
                    </div>
                    <div class="panel-body">
                        <div *ngFor="let item of box2Items">dragData = {{item}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
})
export class CustomFunctionDndComponent {
    box1Integer: number = 3;
    box2Integer: number = 10;

    box1Items: string[] = [];
    box2Items: string[] = [];

    allowDropFunction(baseInteger: number): any {
        return (dragData: any) => dragData % baseInteger === 0;
    }

    addTobox1Items($event: any) {
        this.box1Items.push($event.dragData);
    }

    addTobox2Items($event: any) {
        this.box2Items.push($event.dragData);
    }
}