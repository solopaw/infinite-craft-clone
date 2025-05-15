import { appendFileSync, writeFileSync, readFileSync } from 'fs';
import axios,{isAxiosError} from 'axios';
const {get} = axios
const API = 'https://neal.fun/api/infinite-craft/pair';
// https://neal.fun/api/infinite-craft/pair?first=Grammy&second=Ocean
const HEADERS = {
    ":authority": "neal.fun",
":method": "GET",
":path": "/api/infinite-craft/pair?first=Earth&second=Water",
":scheme": "https",
"accept": "*/*",
"accept-encoding": "gzip, deflate, br, zstd",
"accept-language": "en-US,en;q=0.9,en-AU;q=0.8",
"cookie": "_ga=GA1.1.1549640038.1741313721; usprivacy=1---; ad_clicker=false; _sharedid=b125a060-2509-4683-82fc-e33b03fef722; _sharedid_cst=zix7LPQsHA%3D%3D; _lc2_fpi=edcefc4d0c5f--01jskg6zntkw8cnvcm0x1ybrs1; _lc2_fpi_meta=%7B%22w%22%3A1745485004475%7D; mako_fpc_id=a0fb70d9-223a-49ec-b4ea-373e2db58bc6; _cc_id=f18091a9bf0cca8a298d0343bcc60740; panoramaId=8e8a6b9df4b23882430fe79c98f7185ca02c0caab15ba1f97dcd5da7e0f80154; panoramaIdType=panoDevice; panoramaId_expiry=1747299210859; pwBotScore=99; _li_dcdm_c=.neal.fun; cf_clearance=SPd5VZgmN2np0A3SQcQW9GAZRNwV5UrPBP4d0VqH9X4-1747276315-1.2.1.1-BdMdGXV36cXl_LjTFCfozFCq5sFVQ1t0joLa9Rq1cfe8QduKOIrrUd57Um4OJMYLYjRX_wkzEorcHoDg4c0xRNlD.9CBFjZZ0GQnUmiMSgbi7a3dNgUTdHlhDKiL.9Ab7iYRHqJEaPUcfVA676FF03InN_1JJO5ooedpmVqAWrVvw1kGWsOAKZQVaUoYKAIcTqBB._2xKz5zr_u15QlJPd4e5TtAxWWR1_k_AFVSla.2ABJ8VG542tQ2GBNtkOKBJ9eGJQJsQyVbpyy47RmhZlMYV9PbgzGYIoHpxX2YJR4WnKj8m4N.HFK8GgiBWrTlm74rU5TzZUJiJOVFAOUCZXWv3jDnDKn5FnT4X.slsaI; FCNEC=%5B%5B%22AKsRol-1c_ARK6rNZ9lm18Z6XnSrNoAfpX23UEzKrZfoLGqL-BD9WA3wL9R0tLUTH4qEP90vwosdlcYMVq6c_bqS0MFTlLMvipQusg8F9qw3FRE4F_xYI5Leyo9K4ihSnSSgSs0upe9EP8re93XcDIa0Zc_XiX1d5A%3D%3D%22%5D%5D; cto_bidid=CY0IlF9pVTVuUXB5T2I2MFZUcHFvRG9YTiUyQmUlMkJyTVJuVFRwVUlxRVJXRGxuUjIzcEl1WVlmamR1OE5qRTZDN2V6ZVhKUVcwaWE2a2J1OWhJbXZVR1VDVExEckNKJTJGWXNUZG8yME5PamhoJTJGdnowV1hzJTNE; cto_dna_bundle=tMpjfV9RU3dRVUR6QkdoUFk1cSUyRmFsVUpYYTFJV1AzVkJIakpZcnB0T2J5b0MwaXVweUloWWlHTiUyRm9kWDZhWjNYSmxaMzNnUFVoY3JpSlI4ZGdtSzQ2MGd3d1ElM0QlM0Q; cto_bundle=--qMpF9RU3dRVUR6QkdoUFk1cSUyRmFsVUpYYTNndnlvUGt5dG4yZ1NOSlVoemUzSzhIdEJiUiUyQnRXOXd2dkxlU1Bxb3hnYW13ZEtTdUwyTWR6TEtZZDlJQUV3TnNKSXRWVTlKVG80TU9iNG1qa1dFMWxNUnFGOVFESG1ISFlpNjB2cE5IOSUyQkRNcktMbFhEQlU5cFolMkZsMmZVV0EzUSUzRCUzRA; __gads=ID=cb96ae1308229e80:T=1741313722:RT=1747282067:S=ALNI_MYGeqgaFDR_GzQGaKxJQnkDdZX1uA; __gpi=UID=00001057bf7c1029:T=1741313722:RT=1747282067:S=ALNI_MZS8kkxoQ3VFw_YmY1_kaYPbo-cow; __eoi=ID=3995a012090dfb60:T=1741313722:RT=1747282067:S=AA-AfjZZmhMbhfdxkMDCnthF-1Lf; _ga_L7MJCSDHKV=GS2.1.s1747282067$o10$g1$t1747282163$j0$l0$h0",
"dnt": "1",
"priority": "u=1, i",
"referer": "https://neal.fun/infinite-craft/",
"sec-ch-ua": "\"Chromium\";v=\"136\", \"Microsoft Edge\";v=\"136\", \"Not.A/Brand\";v=\"99\"",
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "\"Windows\"",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"

};

// save files
const CREATION_TREE = 'creation_tree.json';
const TRIED = 'tried.txt';
const FIRST_DISCOVERIES = 'first_discoveries.txt';

const DELAY = null; // optional delay between requests, in seconds

// ANSI escape codes for colored text
const C = {
    YELLOW: '\u001b[33m',
    MAGENTA: '\u001b[35m',
    CYAN: '\u001b[36m',
    GREEN: '\u001b[32m',
    RED: '\u001b[31m',
    BOLD: '\u001b[1m',
    UNDERLINE: '\u001b[4m',
    RESET: '\u001b[0m'
};

function sleep(seconds: number) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function solve() {
    console.log();
    console.log(`${C.BOLD}${C.RED}${C.UNDERLINE}Infinite Crafter${C.RESET}`);
    console.log();
    console.log('Loading save files...');

    const [creationTree, availableItems, tried] = await loadFiles();

    console.log();
    if (DELAY === null) {
        console.log(`${C.CYAN}Running without a delay!${C.RESET}`);
    } else {
        console.log(`${C.RED}Running with a delay of ${DELAY} seconds!${C.RESET}`);
    }
    console.log();

    while (true) {
        const randomIndexes = Array.from({ length: 2 }, () => Math.floor(Math.random() * availableItems.length));
        const item1 = availableItems[randomIndexes[0]];
        const item2 = availableItems[randomIndexes[1]];

        if (tried.some(combo => combo[0] === item1 && combo[1] === item2)) {
            continue;
        }

        if (DELAY !== null) {
            await sleep(Math.random() * DELAY);
        }

        try {
            const response = await get(`${API}?first=${item1}&second=${item2}`, { headers: HEADERS });
            const data = response.data;

            tried.push([item1, item2]);
            appendFileSync(TRIED, `${item1}\t${item2}\n`);

            const { emoji, isNew, result } = data;

            process.stdout.write(`${C.YELLOW}${item1}${C.RESET} + ${C.YELLOW}${item2}${C.RESET} => ${C.MAGENTA}${emoji} ${result}${C.RESET}`);

            if (isNew) {
                console.log(`, ${C.CYAN}${C.BOLD}${C.UNDERLINE}First Discovery!${C.RESET}`);
                if (FIRST_DISCOVERIES) {
                    appendFileSync(FIRST_DISCOVERIES, `${new Date().toISOString()} \t->\t ${result}\n`);
                }
            } else if (result === 'Nothing') {
                console.log(`, ${C.RED}XXX${C.RESET}`);
                continue;
            } else if (!availableItems.includes(result)) {
                console.log(`, ${C.GREEN}New Item!${C.RESET}`);
            } else {
                console.log();
            }

            if (result.includes('+')) {
                console.log(`\t${C.RED}Erroneous result is being omitted from future use...${C.RESET}`);
                continue;
            }

            if (!availableItems.includes(result)) {
                availableItems.push(result);
                creationTree[result] = [item1, item2];
                console.log(`\tItem ${C.GREEN}#${availableItems.length}${C.RESET} @ depth ${C.GREEN}${findDepth(creationTree, result)}${C.RESET}`);
                if (CREATION_TREE) {
                    writeFileSync(CREATION_TREE, JSON.stringify(creationTree, null, 2));
                }
            }
        } catch (error) {
            if (!isAxiosError(error)) return

            console.log(`${C.RED}Error with "${item1}" and "${item2}": ${error.response?.status || error.message}${C.RESET}`);
        }
    }
}

async function loadFiles():Promise<[any, string[], string[][]]> {
    let creationTree = {};
    const availableItems = ['Water', 'Fire', 'Wind', 'Earth'];

    try {
        const data = readFileSync(CREATION_TREE, 'utf8');
        creationTree = JSON.parse(data.trim());
        availableItems.push(...Object.keys(creationTree));
        console.log(`${C.GREEN}Loaded ${CREATION_TREE} with ${availableItems.length} items!${C.RESET}`);
    } catch (error) {
        console.log(`${C.RED}Creation tree save not found, using defaults: ${C.YELLOW}${availableItems.join(', ')}${C.RESET}`);
        writeFileSync(CREATION_TREE, JSON.stringify(creationTree, null, 2));
    }

    let tried:string[][] = [];
    try {
        const data = readFileSync(TRIED, 'utf8');
        tried = data.trim().split('\n').map(combo => combo.split('\t'));
        console.log(`${C.GREEN}Loaded ${TRIED} with ${tried.length} combinations!${C.RESET}`);
    } catch (error) {
        console.log(`${C.RED}Tried combinations file not found, creating one with the name: "${TRIED}"${C.RESET}`);
        writeFileSync(TRIED, '');
    }

    try {
        const firstDiscoveries = readFileSync(FIRST_DISCOVERIES, 'utf8').trim().split('\n');
        console.log(`${C.GREEN}Loaded ${FIRST_DISCOVERIES} with ${firstDiscoveries.length} first discoveries!${C.RESET}`);
    } catch (error) {
        console.log(`${C.RED}First discoveries file not found, creating one with the name: "${FIRST_DISCOVERIES}"${C.RESET}`);
        writeFileSync(FIRST_DISCOVERIES, '');
    }

    return [creationTree, availableItems, tried];
}

function findDepth(creationTree: [any[]], result: string): number {
    for (const [res, [ingredient1, ingredient2]] of Object.entries(creationTree)) {
        if (res === result) {
            return Math.max(findDepth(creationTree, ingredient1), findDepth(creationTree, ingredient2)) + 1;
        }
    }
    return 0;
}

if (require.main === module) {
    solve();
}