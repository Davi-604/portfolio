import { Project } from '@/types/Project';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import { ProjectCard } from './ProjectCard';
import { SkillFlag } from '../skill/SkillFlag';
import { DefaultLinkButton } from '../default/DefaultLinkBtn';
import { IoWarning } from 'react-icons/io5';

type Props = {
    project: Project;
};

export const ProjectDialog = ({ project }: Props) => {
    return (
        <Dialog>
            <DialogTrigger>
                <ProjectCard project={project} />
            </DialogTrigger>
            <DialogContent className="border-none p-0 lg:max-w-3xl overflow-y-scroll h-full">
                <img
                    className="w-full h-[150px] object-cover rounded-lg lg:h-[300px] md:h-[200px]"
                    src={project.thumbUrl}
                />
                <DialogTitle>
                    <div className="text-2xl font-bold mx-2 lg:text-3xl">
                        {project.name}
                    </div>
                </DialogTitle>
                <DialogDescription className="-mt-3">
                    <div
                        className=" text-muted-foreground mx-2 text-xs lg:text-lg"
                        dangerouslySetInnerHTML={{ __html: project.desc as string }}
                    />
                </DialogDescription>
                <div className="my-1 mx-2">
                    <div className="text-xl font-semibold">Tecnologias utilizadas:</div>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-3 lg:text-xl lg:gap-4 lg:grid-cols-4">
                        {project.usedSkills.map((skill, key) => (
                            <SkillFlag skill={skill} key={key} />
                        ))}
                    </div>
                </div>

                <div className={`mx-2 ${!project.isStatic ? 'mb-5' : ''}`}>
                    <div className="text-xl font-semibold">Confira o projeto:</div>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <DefaultLinkButton dest="web" url={project.webUrl} />
                        <DefaultLinkButton dest="youtube" url={project.youtubeUrl} />
                        <DefaultLinkButton dest="github" url={project.gitHubUrl} />
                        <DefaultLinkButton dest="linkedin" url={project.linkedinUrl} />
                    </div>
                </div>
                {project.isStatic && (
                    <div className="mx-2 mb-5 px-4 py-1 bg-muted inline-flex items-center gap-5 w-fit rounded-3xl text-yellow-300 text-xs md:text-sm">
                        <IoWarning className="size-10 lg:size-8" /> Para facilitar a
                        publicação gratuita, os dados do projeto são estáticos.
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
