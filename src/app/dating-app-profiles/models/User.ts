import { BaseLoginAuth } from "./BaseLoginAuth";
import { UserPreferences } from "./UserPreferences";
import { IEvidence } from './IEvidence';

export class User extends BaseLoginAuth implements IEvidence {
    id: number;
    meno: string;
    priezvisko: string;
    vek: number;

    preferences: UserPreferences;

    hairColor: string;
    hairType: string;
    eyeColor: string;
    heightInCm: number;
    figure: string;
    summaryInfo: string;
}