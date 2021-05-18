export default class Route {

    constructor(
        id: string,
        name: string,
        description: string,
        length: number,
        type: RouteType,
        url: string,
        level: Level) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.length = length;
        this.type = type;
        this.url = url;
        this.level = level
    }



    id: string;
    name: string;
    description: string;
    length: number;
    type: RouteType;
    url: string;
    level: Level;
}

export enum RouteType {
    SPORT = "sport",
    TOURIST = "tourist",
    ENDURO = "enduro"
}

export enum Level {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
    NINJA = "ninja"
}

