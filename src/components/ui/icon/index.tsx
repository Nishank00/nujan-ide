import { FC } from 'react';
import {
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineFileAdd,
  AiOutlineFolderAdd,
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineProject,
  AiOutlineSetting,
} from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { CiBeaker1 } from 'react-icons/ci';
import { FaRegClone } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { GoTriangleRight } from 'react-icons/go';
import { HiDocumentText } from 'react-icons/hi';
import { MdFeedback } from 'react-icons/md';
import { SiTestcafe } from 'react-icons/si';
import { VscGist } from 'react-icons/vsc';
import Plus from './Plus';

export type AppIconType =
  | 'Project'
  | 'Edit'
  | 'NewFile'
  | 'NewFolder'
  | 'Close'
  | 'Code'
  | 'Beaker'
  | 'Plus'
  | 'Home'
  | 'AngleRight'
  | 'TestCases'
  | 'Google'
  | 'GitHub'
  | 'Logout'
  | 'Setting'
  | 'Clone'
  | 'Delete'
  | 'Play'
  | 'Document'
  | 'Feedback';

export interface AppIconInterface {
  name: AppIconType;
  className?: string;
}

const Components = {
  Project: AiOutlineProject,
  Edit: FiEdit2,
  NewFile: AiOutlineFileAdd,
  NewFolder: AiOutlineFolderAdd,
  Close: AiOutlineClose,
  Home: AiOutlineHome,
  Code: VscGist,
  Beaker: CiBeaker1,
  AngleRight: GoTriangleRight,
  TestCases: SiTestcafe,
  Google: AiOutlineGoogle,
  GitHub: AiOutlineGithub,
  Logout: AiOutlineLogout,
  Setting: AiOutlineSetting,
  Clone: FaRegClone,
  Plus,
  Delete: AiOutlineDelete,
  Play: BsFillPlayFill,
  Document: HiDocumentText,
  Feedback: MdFeedback,
};

const AppIcon: FC<AppIconInterface> = ({ name, className = '' }) => {
  if (typeof Components[name] !== undefined) {
    const Component = Components[name];
    return <Component className={className} />;
  }

  return <></>;
};

export default AppIcon;
