import { Car, Bot, LineChart, Code2 } from 'lucide-react';
import { Internship, Project, NavItem } from './types';

// Placeholder for the dog avatar. 
// User should replace the src in Hero.tsx with their actual image path or URL.
export const AVATAR_URL = "https://picsum.photos/id/1025/400/400"; 

export const NAV_LINKS: NavItem[] = [
  { label: '关于我', href: '#about' },
  { label: '实习经历', href: '#experience' },
  { label: '项目展示', href: '#projects' },
  { label: '联系方式', href: '#contact' },
];

export const TYPING_PHRASES = [
  'AI 技术爱好者',
  '华东师范大学计算机硕士在读',
  '运动爱好者 (羽毛球/跑步)',
  '大模型应用开发'
];

export const TECH_STACK = [
  'Python', 'PyTorch', 'C++', 'LLM', 'ROS', 'OpenCV', 'Linux', 'React', 'Coze/Dify'
];

export const AWARDS = [
  '国家励志奖学金 & 校三好学生',
  '第二届中国人工智能创新大赛 三等奖',
  '“河源杯”程序设计大赛 铜奖'
];

export const INTERNSHIPS: Internship[] = [
  {
    id: 1,
    period: '2024.10 - 2025.01',
    role: 'AI 大模型应用开发实习生',
    company: '上海索塔沃科技有限公司',
    details: [
      '负责公司 AI C 端产品的开发(垂直婚礼大模型)，包括 Coze/Dify workflow与agent的搭建',
      '负责agent的 context engineering的开发，提升模型输出质量',
      '调研 AI 行业前沿信息，进行复现并学习应用到实际的开发中'
    ],
    tags: ['Coze/Dify', 'Agent', 'Context Engineering']
  },
  {
    id: 2,
    period: '2024.06 - 2024.09',
    role: 'AI 算法工程师 (实习)',
    company: '郑州芝麻知识产权代理事务所',
    details: [
      '负责技术的探索与项目的复现，涉及图像处理及数据处理算法的研究',
      '研究图像识别、分类、分割、增强等算法，以及数据降维、异常检测等技术',
      '数据分析与处理，侧重于 Research'
    ],
    tags: ['图像处理', '数据处理', '数据分析']
  },
  {
    id: 3,
    period: '2024.03 - 2024.05',
    role: 'AI 数据工程师 (实习)',
    company: '上海乐言科技有限公司',
    details: [
      '负责对大量文本数据进行处理清洗，确保数据质量满足 LLM 模型训练要求',
      '主动开展数据收集工作，通过多种渠道整理有效信息，并进行数据分析与处理',
      '参与大模型知识评估工作，分析模型输出结果并提供改进建议'
    ],
    tags: ['数据处理', '模型评估', '结果优化']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    icon: Car,
    title: '车牌定位识别算法',
    description: '基于深度学习的目标检测算法，使用 YOLOv5 模型自动定位车牌，结合 LPRnet 轻量级神经网络识别车牌内容。实现了端到端的训练与部署，最后集成硬件可实时接收图像并返回识别结果。',
    tags: ['Python', 'PyTorch', 'YOLOv5', 'LPRnet'],
    links: { github: '#', demo: '#' }
  },
  {
    id: 2,
    icon: Bot,
    title: '农业智能创新导航小车',
    description: '中国人工智能创新大赛参赛项目。具有多类农作物智能识别与定位功能的自主导航小车，基于 Jetson Nano 平台搭建 ROS 机器人编程环境，实现循迹导航与实时数据回传。',
    tags: ['Python', 'ROS', 'Jetson Nano', 'Linux'],
    links: { github: '#' }
  },
  {
    id: 3,
    icon: LineChart,
    title: '图像处理与标注工具',
    description: '基于 OpenCV 和 Matplotlib 的图像处理工具集，用于深度学习数据集的预处理、增强和可视化分析，支持批量标注和异常检测。',
    tags: ['Python', 'OpenCV', 'Matplotlib'],
    links: { github: '#' }
  }
];