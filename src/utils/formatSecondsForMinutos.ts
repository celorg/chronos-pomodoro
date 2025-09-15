

export function formatSecondForMinutes(seconds: number) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondMods = String(Math.floor(seconds % 60)).padEnd(2, '0');

    return `${minutes}:${secondMods}`;
};
