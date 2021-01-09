import daysjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

daysjs.locale('pt-br');
daysjs.extend(relativeTime);

export function formatPrice(price: number) {
    /*const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
    */

    //console.log('price:', price);

    return price;
}

export function dateFromNow(date: string) {
    return daysjs(date).fromNow();
}