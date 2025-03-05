declare const lazyScripts: Array<{
    maxWidth: any;
    name: string | string[];
    lazyLoadSection: string;
    pageSlug?: string[];
}>;

declare const globalVariables: {
    pageSlug: string;
    siteUrl: string;
    restUrl: string;
    themeRestUrl: string;
    assetsUrl: string;
    nonce: string;
    buildScripts: string;
};
