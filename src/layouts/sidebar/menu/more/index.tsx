import MoreIcon from '@/assets/icons/more.svg';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AtIcon from '@/assets/icons/at.svg';
import MonetizationIcon from '@/assets/icons/monetization.svg';
import { Separator } from '@/components/ui/separator.tsx';
import AnalyticsIcon from '@/assets/icons/analytics.svg';
import AdsIcon from '@/assets/icons/ads.svg';
import SettingIcon from '@/assets/icons/settings.svg';
import HelpIcon from '@/assets/icons/help.svg';
import DisplayIcon from '@/assets/icons/display.svg';
import KeyboardAndShortcutsIcon from '@/assets/icons/keyboardandshortcuts.svg';
import { Link } from 'react-router-dom';

export const More = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className='block py-[3px]'>
          <div className='sidebar-item'>
            <div className='relative'>
              <MoreIcon />
            </div>
            <p className='pr-4 text-xl'>Daha Fazla</p>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <button className='flex h-14 w-full items-center gap-5 px-4 transition-colors fill-logo group hover:bg-item'>
          <AtIcon />
          <p className='pr-4 text-xl font-bold'>Bağlan</p>
        </button>
        <button className='flex h-14 w-full items-center gap-5 px-4 transition-colors fill-logo group hover:bg-item'>
          <MonetizationIcon />
          <p className='pr-4 text-xl font-bold'>Para kazanma</p>
        </button>
        <Separator className='mx-auto w-[89%] my-[2px]' />
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>İçerik Üreticisi Stüdyosu</AccordionTrigger>
            <AccordionContent>
              <Link
                to='/'
                className='flex fill-logo items-center hover:bg-item transition-colors px-3 h-11 gap-3 text-[15px] font-medium'>
                <AnalyticsIcon />
                İstatistikler
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Profesyonel Araçlar</AccordionTrigger>
            <AccordionContent>
              <Link
                to='/'
                className='flex fill-logo items-center hover:bg-item transition-colors px-3 h-11 gap-3 text-[15px] font-medium'>
                <AdsIcon />
                Reklamlar
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Ayarlar ve Destek</AccordionTrigger>
            <AccordionContent>
              <Link
                to='/'
                className='flex fill-logo items-center hover:bg-item transition-colors px-3 h-11 gap-3 text-[15px] font-medium'>
                <SettingIcon />
                Ayarlar ve Gizlilik
              </Link>
              <Link
                to='/'
                className='flex fill-logo items-center hover:bg-item transition-colors px-3 h-11 gap-3 text-[15px] font-medium'>
                <HelpIcon />
                Yardım Merkezi
              </Link>
              <Link
                to='/'
                className='flex fill-logo items-center hover:bg-item transition-colors px-3 h-11 gap-3 text-[15px] font-medium'>
                <DisplayIcon />
                Görünüm
              </Link>
              <Link
                to='/'
                className='flex fill-logo items-center hover:bg-item transition-colors px-3 h-11 gap-3 text-[15px] font-medium'>
                <KeyboardAndShortcutsIcon />
                Klavye kısayolları
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PopoverContent>
    </Popover>
  );
};
