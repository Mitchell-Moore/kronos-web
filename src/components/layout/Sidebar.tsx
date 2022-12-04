import React from 'react';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const curPage = window.location.pathname;

  const isSelected = (curPage: string, page: string) => {
    return curPage.includes(page.toLowerCase());
  };
  const sidebarItems: SidebarItemProps[] = [
    {
      title: 'Availability',
      icon: 'icon',
      isSelected: isSelected(curPage, 'Availability'),
    },
    {
      title: 'Bookings',
      icon: 'icon',
      isSelected: isSelected(curPage, 'Bookings'),
    },
  ];
  return (
    <div className="hidden md:flex w-56 flex-col border-r border-gray-100 bg-gray-50 absolute left-0 h-screen overflow-hidden pt-5 px-4">
      <a href="/" className="px-4">
        <div className="font-bold text-2xl text-black">Kronos</div>
      </a>

      <ul className="mt-4">
        {sidebarItems.map((item) => (
          <SidebarItem {...item} key={item.title} />
        ))}
      </ul>
    </div>
  );
};

interface SidebarItemProps {
  title: string;
  icon: string;
  isSelected: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  return (
    <div
      className={
        'flex flex-row rounded px-4 py-3 mt-1 group hover:bg-gray-300 ' +
        (props.isSelected ? 'bg-gray-200' : '')
      }
    >
      <i className="pr-2">{props.icon}</i>
      <span> {props.title}</span>
    </div>
  );
};

export default Sidebar;
