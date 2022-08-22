export interface SidebarItem {
  name: string;
  path: string;
  icon: any;
  iconOpened?: any;
  iconClosed?: any;
  isOpen?: boolean;
  subNav?: SidebarItem[];
}
