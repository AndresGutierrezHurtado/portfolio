import { GrLanguage as LanguageIcon } from "react-icons/gr";
import { MdOutlineFileDownload as DownloadIcon, MdMailOutline as MailIcon } from "react-icons/md";
import { FiGithub as GithubIcon } from "react-icons/fi";
import { FaLinkedinIn as LinkedinIcon } from "react-icons/fa6";

const SpainIcon = (props) => {
    return <img src="/spain-flag.svg" {...props} alt="Spanish flag" />;
};

const UsaIcon = (props) => {
    return <img src="/usa-flag.svg" {...props} alt="United States flag" />;
};

export { LanguageIcon, SpainIcon, UsaIcon, DownloadIcon, MailIcon, GithubIcon, LinkedinIcon };
