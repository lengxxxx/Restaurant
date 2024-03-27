export class Element_SETTING {
  id!: number
  routerLink!: string
  icon!: string
}

export const MENU_SETTING: Element_SETTING[] = [
  {
    id: 1,
    routerLink: '/user', icon: 'person'
  }, {
    id: 2,
    routerLink: '/category', icon: 'home'
  }, {
    id: 3, 
    routerLink: '/role', icon: 'perm_data_setting'
  }, {
    id: 5, 
    routerLink: '/ingredient', icon: 'person_add',
  },{
    id: 5, 
    routerLink: '/menu', icon: 'person_add',
  },{
    id: 5, 
    routerLink: '/table', icon: 'person_add',
  },
];
