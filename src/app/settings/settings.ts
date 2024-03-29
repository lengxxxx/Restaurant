export class Element_SETTING {
  id!: number
  name!:string
  routerLink!: string
  icon!: string
}

export const MENU_SETTING: Element_SETTING[] = [
  {
    id: 1, name: "user",
    routerLink: '/user', icon: 'person'
  }, {
    id: 2, name: "category",
    routerLink: '/category', icon: 'home'
  }, {
    id: 3, name: "role",
    routerLink: '/role', icon: 'perm_data_setting'
  }, {
    id: 5, name: "ingredient",
    routerLink: '/ingredient', icon: 'person_add',
  },{
    id: 5, name: "menu",
    routerLink: '/menu', icon: 'person_add',
  },{
    id: 5, name: "table",
    routerLink: '/table', icon: 'person_add',
  },
];
