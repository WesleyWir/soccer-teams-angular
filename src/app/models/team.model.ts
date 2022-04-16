export class Team {
    private _name: string;
    private _wins: number = 0;
    private _defeats: number = 0;
    private _draws: number = 0;
    private _points: number;

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name
    }

    set wins(wins: number) {
        this._wins = wins;
    }

    get wins(): number {
        return this._wins;
    }

    set defeats(defeats: number) {
        this._defeats = defeats;
    }

    get defeats(): number {
        return this._defeats;
    }

    set draws(draws: number) {
        this._draws = draws;
    }

    get draws(): number {
        return this._draws;
    }

    set points(points: number) {
        this._points = points;
    }

    get points(): number {
        return this._points;
    }
}