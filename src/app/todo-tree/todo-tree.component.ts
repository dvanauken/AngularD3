import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-tree',
  templateUrl: './todo-tree.component.html',
  styleUrls: ['./todo-tree.component.css']
})
export class TodoTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<Todo>(node => node.children || []);
  dataSource = new MatTreeNestedDataSource<Todo>();

  constructor(private todoService: TodoService) {}

//   ngOnInit(): void {
//     const simpleData: Todo[] = [
//       {
//         id: 1,
//         name: "Project A",
//         description: "Main project",
//         children: [
//           {
//             id: 2,
//             name: "Module A1",
//             description: "Sub-module of Project A",
//             children: [
//               {
//                 id: 4,
//                 name: "Feature A1-1",
//                 description: "Feature of Module A1",
//                 children: []
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: 3,
//         name: "Project B",
//         description: "Secondary project",
//         children: []
//       }
//     ];
//
//     this.dataSource.data = simpleData;
//     console.log("Hardcoded Tree Data: ", JSON.stringify(this.dataSource.data, null, 2));
//   }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => {
      const treeData = this.buildTree(data, null);
      this.dataSource.data = treeData;
      console.log("Tree Data from JSON: ", JSON.stringify(treeData, null, 2));
    });
  }

  hasChild = (_: number, node: Todo) => !!node.children && node.children.length > 0;

  private buildTree(data: Todo[], parentId: number | null): Todo[] {
    return data
      .filter(item => item.parent_id === parentId)
      .map(item => {
        const children = this.buildTree(data, item.id);
        return {
          ...item,
          children: children.length ? children : []
        };
      });
  }

  toggleNode(node: Todo): void {
    console.log(`Toggling node: ${node.name}`);
    this.treeControl.toggle(node);
  }
}
