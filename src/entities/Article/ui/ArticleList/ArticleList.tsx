import { HTMLAttributeAnchorTarget, memo } from 'react';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PAGE_ID } from 'shared/ui/Page/Page';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const { t } = useTranslation();
    const {
        className,
        view = ArticleView.SMALL,
        articles,
        isLoading,
        target,
        virtualized = true,
    } = props;

    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({ index, key, style }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    target={target}
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    key={articles[i].id}
                />,
            );
        }

        return (
            <div key={key} className={cls.row} style={style}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        // @ts-ignore
        <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized ? (
                        // @ts-ignore
                        <List
                            rowCount={rowCount}
                            height={height ?? 700}
                            rowHeight={isBig ? 700 : 330}
                            rowRenderer={rowRenderer}
                            width={width ? width - 80 : 700}
                            autoHeight
                            onScroll={onChildScroll}
                            isScrolling={isScrolling}
                            scrollTop={scrollTop}
                        />
                    ) : (
                        <div className={cls.row}>
                            {articles.map((item) => (
                                <ArticleListItem
                                    key={item.id}
                                    className={cls.card}
                                    article={item}
                                    view={view}
                                    target={target}
                                />
                            ))}
                        </div>
                    )}
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
