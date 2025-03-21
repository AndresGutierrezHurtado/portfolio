import { FiGithub as GithubIcon } from "react-icons/fi";
import { GrLanguage as LanguageIcon } from "react-icons/gr";
import { AiOutlineExport as ExportIcon } from "react-icons/ai";
import { PiCaretDoubleDownBold as CaretsDown } from "react-icons/pi";
import { MdOutlineFileDownload as DownloadIcon, MdMailOutline as MailIcon } from "react-icons/md";
import {
    FaLinkedinIn as LinkedinIcon,
    FaCertificate as CertificateIcon,
    FaArrowRight as ArrowRight,
} from "react-icons/fa6";
import {
    FaPaperPlane as PaperPlaneIcon,
    FaHtml5 as HTMLIcon,
    FaCss3 as CSSIcon,
    FaJs as JavaScriptIcon,
    FaReact as ReactIcon,
    FaNodeJs as NodeIcon,
    FaLaravel as LaravelIcon,
    FaFigma as FigmaIcon,
    FaBootstrap as BootstrapIcon,
} from "react-icons/fa";
import {
    SiPhp as PHPIcon,
    SiMysql as MySQLIcon,
    SiMongodb as MongoDBIcon,
    SiNextdotjs as NextIcon,
    SiExpress as ExpressIcon,
    SiSequelize as SequelizeIcon,
    SiSocketdotio as SocketIcon,
    SiPostman as PostmanIcon,
    SiTailwindcss as TailwindCSSIcon,
} from "react-icons/si";

const SpainIcon = (props) => {
    return <img src="/spain-flag.svg" {...props} alt="Spanish flag" />;
};

const UsaIcon = (props) => {
    return <img src="/usa-flag.svg" {...props} alt="United States flag" />;
};

export {
    // Icons
    HTMLIcon,
    CSSIcon,
    JavaScriptIcon,
    PHPIcon,
    MySQLIcon,
    MongoDBIcon,
    ReactIcon,
    NextIcon,
    NodeIcon,
    ExpressIcon,
    LaravelIcon,
    SequelizeIcon,
    SocketIcon,
    GithubIcon as GitHubIcon,
    FigmaIcon,
    PostmanIcon,
    TailwindCSSIcon,
    BootstrapIcon,

    //extra
    LanguageIcon,
    SpainIcon,
    UsaIcon,
    DownloadIcon,
    MailIcon,
    GithubIcon,
    LinkedinIcon,
    CaretsDown,
    ExportIcon,
    CertificateIcon,
    ArrowRight,
    PaperPlaneIcon,
};
