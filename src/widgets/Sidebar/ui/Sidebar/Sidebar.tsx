import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(!collapsed);

    return (
        <div
            className={classNames (cls.Sidebar, {[cls.collapsed]:collapsed}, [className])}
        >
          <Button onClick={onToggle}>
              toggle
          </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang} />
            </div>

        </div>
    );
};
