//@ts-expect-error as @
import numeral from 'numeral';

export function formatNumber(num: string | number, symbol: boolean | string = ''): string {
    const val = numeral(num).format('0,0.00');
    if (typeof symbol === 'boolean' && symbol) return '₦' + val;
    return symbol + val;
}

export function getWinAmountFromStake(stake:number) {
    const total = stake + stake;
    return (total/10) * 9;
}
