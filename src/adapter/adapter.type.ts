import { IContainer } from '../container/container.type';
import { EventEmitter } from 'events';
import { Maestro, IMaestroRequestHandler } from '../maestro/maestro.class';

export interface IAdapter extends EventEmitter {

	readonly name: string;
	addContainer(container: IContainer): void;
	setRequestHandler(handler: IMaestroRequestHandler): void;
	start(): void;

}

export function isAdapter(obj : any) : obj is IAdapter {
	return (
		typeof obj.name === "string"
		&& typeof obj.addContainer === "function"
		&& typeof obj.setRequestHandler === "function"
		&& typeof obj.start === "function"
	);
}