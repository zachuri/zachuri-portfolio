"use client";

import { ContactItem } from "@/types";
import React from "react";
import { Icons } from "@/components/ui/icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { toast } from "./ui/use-toast";

interface Props {
	items?: ContactItem[];
}

const MainContact: React.FC<Props> = ({ items }) => {
	return (
		<div className='grid grid-cols-3 md:grid-cols-3 gap-5 justify-center'>
			{items?.map(item => {
				const Icon = Icons[item.icon || "arrowRight"];
				return (
					<div
						key={item.name}
						className='relative overflow-hidden rounded-lg border bg-background hover:border-foreground transition-colors duration-300'>
						<HoverCard>
							<HoverCardTrigger href={item.href}>
								<div className='flex flex-col items-center justify-center p-8 md:p-16'>
									<div className='space-y-2'>
										{/* @ts-ignore */}
										<Icon className='h-6 w-6 md:h-7 md:w-7' strokeWidth={1.5} />
									</div>
								</div>
							</HoverCardTrigger>
							<HoverCardContent>
								<div className='flex justify-between space-x-4'>
									<div className='space-y-1'>
										<h4 className='text-sm font-semibold'>{item.name}</h4>
										<p className='text-sm'>{item.description}</p>
										<button
											onClick={() => {
												toast({
													title: "Copied to clipboard",
													description: "Successfully copied info to clipboard",
												});
											}}
											className='text-xs text-foreground flex flex-wrap j space-x-3'>
											{item.info}
											<div className='opacity-0 hover:opacity-100 transition-all duration-500'>
												<Icons.clipboard size={20} />
											</div>
										</button>
									</div>
								</div>
							</HoverCardContent>
						</HoverCard>
					</div>
				);
			})}
		</div>
	);
};

export default MainContact;
