import parser from 'fast-xml-parser';
import { Transcript, TranscriptList } from '@/types';

const options = {
    attributeNamePrefix: '',
    textNodeName: 'text',
    ignoreAttributes: false,
};

export function parseTranscriptXML(xml: string): Transcript {
    if (xml === undefined || xml === '') return { text: [] };
    xml = fixEscapeCharacters(xml);

    let jsonObj;
    try {
        jsonObj = parser.parse(xml, options, true);
    } catch (e) {
        console.error(e);
    }
    return jsonObj.transcript;
}

export function parseAvailableTranscriptListXML(xml: string): TranscriptList {
    if (xml === undefined || xml === '') return {};

    let jsonObj;
    try {
        jsonObj = parser.parse(xml, options, true);
    } catch (e) {
        console.error(e);
    }
    return jsonObj;
}

function fixEscapeCharacters(xml: string): string {
    return xml
        .replaceAll('&amp;quot;', '"')
        .replaceAll('&amp;#39;', '\'');
}