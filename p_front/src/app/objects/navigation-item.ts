export class NavigationItem {

  constructor(name:string, route:string, selected:boolean = false) {
    this.name = name;
    this.route = route;
    this.selected = selected;
  }

  name:string = "";
  route:string = "";
  selected:boolean = false;
}
