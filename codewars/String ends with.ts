export function solution(str: string, ending: string): boolean {
     const result = str.substr(str.length - ending.length, str.length);
    return ending === result;
}
