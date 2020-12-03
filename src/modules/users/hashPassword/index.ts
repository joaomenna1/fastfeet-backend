import { container } from "tsyringe";

import IHashUser from './model/IHashUser';
import BCryptHashUser from './implementations/BCryptHashUser';

container.registerSingleton<IHashUser>('HashUser', BCryptHashUser)
