import { Role } from '@app/types/Role';
import Mongoose, { Model } from 'mongoose';

export interface IRoleCache{
  sessionHash: string;
  createdAt: number;
  tte: number;
  roles: Role[]
}

export const RoleSchema = new Mongoose.Schema({
	sessionHash: String,
	createdAt: Number,
	tte: Number,
	roles: Array,
});

export default Mongoose.models.RoleCache as Model<IRoleCache>
|| Mongoose.model<IRoleCache>('RoleCache', RoleSchema);