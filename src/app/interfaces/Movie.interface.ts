export interface Movie{
    id: number,
    url:string,
    name: string,
    type: string,
    language: string,
    genres:Array<string>,
    status: string,
    runtime: number,
    averageRuntime: number,
    premiered: number,
    ended: null,
    officialSite: string,
    schedule: {
        time: number,
        days: [
            string
        ]
    },
    rating: {
        average: number
    },
    weight: number,
    network: {
        id: number,
        name: string,
        country: {
            name: string,
            code: string,
            timezone: string
        },
        officialSite: string
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
        tvrage: number,
        thetvdb: number,
        imdb: string
    },
    image: {
        medium: string,
        original: string
    },
    summary: string,
    updated: number,
    _links: {
        self: {
            href: string
        },
        previousepisode: {
            href: string
        },
        nextepisode: {
            href: string
        }
    }
}
