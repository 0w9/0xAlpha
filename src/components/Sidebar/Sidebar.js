import React from 'react';
import cx from 'classnames';
import s from './Sidebar.module.scss';
import LinksGroup from './LinksGroup';
import { FaHome } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import './Sidebar.css'
import {changeActiveSidebarItem} from '../../actions/navigation';
import TypographyIcon from '../Icons/SidebarIcons/TypographyIcon';
import TablesIcon from '../Icons/SidebarIcons/TablesIcon';
import NotificationsIcon from '../Icons/SidebarIcons/NotificationsIcon';
import ComponentsIcon from '../Icons/SidebarIcons/ComponentsIcon';

class Sidebar extends React.Component {
    render() {
        return (
            <nav className={cx(s.root)} ref={(nav) => {this.element = nav;}}>
                <header className={s.logo}>
                    <a href="https://demo.flatlogic.com/light-blue-react/">0x<span
                        className="fw-bold">Nuntius</span></a>
                </header>

                <ul className={s.nav}>
                   <div className="sidebarIcons">
                       <a href="./"> <FaHome size={ 28 } /> </a>
                       <FaBell size={ 25 } className="icon" />
                   </div>

                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="BAYC"
                        isHeader
                        iconName={<TypographyIcon className={s.menuIcon} />}
                        link="/app/typography"
                        index="core"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={t => this.props.dispatch(changeActiveSidebarItem(t))}
                        activeItem={this.props.activeItem}
                        header="Cool Cats"
                        isHeader
                        iconName={<TablesIcon className={s.menuIcon} />}
                        link="/app/tables"
                        index="tables"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="CloneX"
                        isHeader
                        iconName={<NotificationsIcon className={s.menuIcon}/>}
                        link="/app/notifications"
                        index="ui"
                    />
                    <LinksGroup
                        onActiveSidebarItemChange={activeItem => this.props.dispatch(changeActiveSidebarItem(activeItem))}
                        activeItem={this.props.activeItem}
                        header="Mfer"
                        isHeader
                        iconName={<ComponentsIcon className={s.menuIcon}/>}
                        link="/app/components"
                        index="components"
                    />
                </ul>
            </nav>
        );
    }
}

export default Sidebar;
