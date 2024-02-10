import { contacts } from "../../data/data";

const SocialIcons = () => {
    return (
        <div className="flex gap-x-4 ">
            {contacts.map(({ type, href, Icon }) => {
                return (
                    <div key={type}>
                        <dt className="sr-only">{type}</dt>
                        <dd className="flex items-center">
                            <a
                                className=
                                '-m-2 flex rounded-md p-2 text-neutral-500 hover:text-sky-300'
                                href={href}>
                                <Icon />
                            </a>
                        </dd>
                    </div>
                );
            })}
        </div>
    )
};

export default SocialIcons;
