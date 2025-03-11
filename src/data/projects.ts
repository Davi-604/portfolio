import { Project } from '@/types/Project';
import {
    FaAws,
    FaCss3,
    FaHtml5,
    FaJsSquare,
    FaLaravel,
    FaNodeJs,
    FaPhp,
    FaReact,
} from 'react-icons/fa';
import {
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

export const projects: Project[] = [
    {
        id: 1,
        name: 'Sobremesas da Paty',
        desc: 'Projeto Full-stack que consiste em um Marketplace e página de apresentação para a confeitaria "Sobremesas da Paty". Além disso o projeto também contém um painel administrativo exclusivo para o gerente da loja. Este projeto se trata de um projeto comercial que foi desenvolvido visando atender aos interesses do cliente.',
        thumbUrl: 'images/sobremesas-paty.png',
        gitHubUrl: 'https://github.com/Davi-604/sobremesas-da-paty',
        webUrl: 'https://www.sobremesasdapaty.com/',
        usedSkills: [
            {
                id: 5,
                label: 'React.js',
                iconColor: '#288ddd',
                Icon: FaReact,
                desc: 'Biblioteca dinâmica para a construção de interfaces de usuário interativas.',
                role: 'frontend',
            },
            {
                id: 6,
                label: 'Next.js',
                iconColor: '#000',
                Icon: SiNextdotjs,
                desc: 'Framework para aplicações React com renderização do lado do servidor e navegação dinâmica.',
                role: 'frontend',
            },
            {
                id: 8,
                label: 'TailwindCss',
                iconColor: '#07b1d0',
                Icon: SiTailwindcss,
                desc: 'Framework para estilizar páginas de forma rápida e consistente.',
                role: 'frontend',
            },
            {
                id: 7,
                label: 'Typescript',
                iconColor: '#2e72bd',
                Icon: SiTypescript,
                role: 'backend',
            },
            {
                id: 12,
                label: 'PostgreSQL',
                iconColor: '#2e5d8b',
                Icon: SiPostgresql,
                desc: 'Banco de dados relacional avançado com suporte a dados complexos.',
                role: 'backend',
            },
            {
                id: 13,
                label: 'AWS',
                iconColor: '#FF9900',
                Icon: FaAws,
                desc: 'Plataforma de hospedagem e gerenciamento de serviços de computação em nuvem.',
                role: 'backend',
            },
        ],
    },
    {
        id: 2,
        name: 'Japa-zap API',
        desc: 'API desenvolvida para o marketplace Japa-zap, a qual fornece toda a estrutura necessária para a organização dos produtos e categorias da aplicação.',
        thumbUrl: 'images/japa-zap-thumb.png',
        gitHubUrl: 'https://github.com/Davi-604/JapaZAP-back',
        usedSkills: [
            {
                id: 4,
                label: 'NodeJs',
                iconColor: '#8cc84c',
                Icon: FaNodeJs,
                role: 'backend',
            },
            {
                id: 7,
                label: 'Typescript',
                iconColor: '#2e72bd',
                Icon: SiTypescript,
                role: 'backend',
            },
            {
                id: 12,
                label: 'PostgreSQL',
                iconColor: '#2e5d8b',
                Icon: SiPostgresql,
                desc: 'Banco de dados relacional avançado com suporte a dados complexos.',
                role: 'backend',
            },
            {
                id: 13,
                label: 'AWS',
                iconColor: '#FF9900',
                Icon: FaAws,
                desc: 'Plataforma de hospedagem e gerenciamento de serviços de computação em nuvem.',
                role: 'backend',
            },
        ],
    },
    {
        id: 3,
        name: 'Japa-zap marketplace',
        thumbUrl: 'images/japa-zap-menu.png',
        desc: 'Marketplace para restaurantes com foco em comida japonesa, tendo uma interface atraente e intuitiva para os clientes escolherem as suas comidas.',
        gitHubUrl: 'https://github.com/Davi-604/JapaZAP',
        webUrl: 'https://japa-zap-static.vercel.app/',
        youtubeUrl: 'https://youtu.be/AvRdahknkb8?si=dR3fPKKT8g9zgO8B',
        linkedinUrl:
            'https://www.linkedin.com/posts/davicarvalhodev604_javascript-reactjs-nextjs-activity-7288266904652161024-fh9s?utm_source=share&utm_medium=member_desktop',
        isStatic: true,
        usedSkills: [
            {
                id: 5,
                label: 'React.js',
                iconColor: '#288ddd',
                Icon: FaReact,
                role: 'frontend',
            },
            {
                id: 6,
                label: 'Next.js',
                iconColor: '#000',
                Icon: SiNextdotjs,
                role: 'frontend',
            },
            {
                id: 7,
                label: 'Typescript',
                iconColor: '#2e72bd',
                Icon: SiTypescript,
                role: 'backend',
            },
            {
                id: 8,
                label: 'TailwindCss',
                iconColor: '#07b1d0',
                Icon: SiTailwindcss,
                role: 'frontend',
            },
        ],
    },
    {
        id: 4,
        name: 'Japa-zap painel de administrador',
        thumbUrl: 'images/japa-zap-admin.png',
        desc: 'Painel administrativo para o marketplace Japa-zap, nele o dono do estabelecimento tem o total controle dos produtos e categorias presente no site.<br/><b>(Senha para entrar: 1234)</b>',
        gitHubUrl: 'https://github.com/Davi-604/JapaZAP',
        youtubeUrl: 'https://youtu.be/AvRdahknkb8?si=dR3fPKKT8g9zgO8B',
        linkedinUrl:
            'https://www.linkedin.com/posts/davicarvalhodev604_javascript-reactjs-nextjs-activity-7288266904652161024-fh9s?utm_source=share&utm_medium=member_desktop',
        webUrl: 'https://japa-zap-static.vercel.app/login',
        isStatic: true,
        usedSkills: [
            {
                id: 5,
                label: 'React.js',
                iconColor: '#288ddd',
                Icon: FaReact,
                role: 'frontend',
            },
            {
                id: 6,
                label: 'Next.js',
                iconColor: '#000',
                Icon: SiNextdotjs,
                role: 'frontend',
            },
            {
                id: 7,
                label: 'Typescript',
                iconColor: '#2e72bd',
                Icon: SiTypescript,
                role: 'backend',
            },
            {
                id: 8,
                label: 'TailwindCss',
                iconColor: '#07b1d0',
                Icon: SiTailwindcss,
                role: 'frontend',
            },
        ],
    },
    {
        id: 5,
        name: 'To-do com cadastro e categorias',
        thumbUrl: 'images/laravel-todo.png',
        desc: 'Uma lista de tarefas que permite ao usuário cadastrar-se, organizar sua rotina de tarefas por meio de datas e categorias e acompanhar o progresso diário por meio de um gráfico dinâmico, oferecendo controle completo sobre tarefas e categorias.',
        gitHubUrl: 'https://github.com/Davi-604/laravel-todo',
        youtubeUrl: 'https://youtu.be/BfkD60c8nZ4?si=qNuogSOaCu9g3Zbe',
        linkedinUrl:
            'https://www.linkedin.com/posts/davicarvalhodev604_laravel-php-programaaexaeto-activity-7277421391505686528-4PIX?utm_source=share&utm_medium=member_desktop',
        usedSkills: [
            {
                id: 1,
                label: 'HTML',
                iconColor: '#f16528',
                Icon: FaHtml5,
                role: 'frontend',
            },
            {
                id: 8,
                label: 'TailwindCss',
                iconColor: '#07b1d0',
                Icon: SiTailwindcss,
                role: 'frontend',
            },
            {
                id: 3,
                label: 'JavaScript',
                iconColor: '#f7df1d',
                Icon: FaJsSquare,
                desc: 'Linguagem de programação responsável por permitir a interatividade do usuário.',
                role: 'frontend',
            },
            {
                id: 9,
                label: 'PHP',
                iconColor: '#818cb9',
                Icon: FaPhp,
                desc: 'Linguagem de programação para desenvolvimento backend dinâmico.',
                role: 'backend',
            },
            {
                id: 10,
                label: 'Laravel',
                iconColor: '#f32717',
                Icon: FaLaravel,
                desc: 'Framework PHP para construção de aplicações web modernas, robustas e escaláveis.',
                role: 'backend',
            },
            {
                id: 11,
                label: 'MySQL',
                iconColor: '#e48e0a',
                Icon: SiMysql,
                desc: 'Banco de dados relacional popular e eficiente.',
                role: 'backend',
            },
        ],
    },
];
