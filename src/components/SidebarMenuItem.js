export default function SidebarMenuItem({ text, Icon,active })
{
    return (
        <div className="hoverEffect flex items-center xl:space-x-3 xl:justify-start">
            <Icon className="h-7 w-7" />
            <span className={`${active ? 'font-bold' : 'font-medium'} text-lg hidden xl:inline`}>{text}</span>
        </div>
    );
}
