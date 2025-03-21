import { GrLanguage as LanguageIcon } from "react-icons/gr";
import { MdOutlineFileDownload as DownloadIcon, MdMailOutline as MailIcon } from "react-icons/md";
import { FiGithub as GithubIcon } from "react-icons/fi";
import { FaLinkedinIn as LinkedinIcon, FaCertificate as CertificateIcon, FaArrowRight as ArrowRight } from "react-icons/fa6";
import { PiCaretDoubleDownBold as CaretsDown } from "react-icons/pi";
import { AiOutlineExport as ExportIcon } from "react-icons/ai";

const SpainIcon = (props) => {
    return <img src="/spain-flag.svg" {...props} alt="Spanish flag" />;
};

const UsaIcon = (props) => {
    return <img src="/usa-flag.svg" {...props} alt="United States flag" />;
};

export {
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
};
