import { LogView } from '@/components/shared';
import AppIcon from '@/components/ui/icon';
import { useLogActivity } from '@/hooks/logActivity.hooks';
import { LogOptions, LogType } from '@/interfaces/log.interface';
import { debounce } from '@/utility/utils';
import { Input, Select, Tooltip } from 'antd';
import { FC, useState } from 'react';
import s from './BottomPanel.module.scss';

type logType = LogType | 'all';
interface Filter {
  text: string;
  type: logType;
}

const BottomPanel: FC = () => {
  const { clearLog } = useLogActivity();

  const [filter, setFilter] = useState<Filter>({
    text: '',
    type: 'all',
  });

  const filterLogType = { all: 'all', ...LogOptions };

  const logList = Object.values(filterLogType).map((type) => {
    return {
      value: type,
      label: type.toLocaleUpperCase(),
    };
  });

  const updateFilter = (newFilter: Partial<Filter>) => {
    setFilter((current) => {
      return { ...current, ...newFilter };
    });
  };

  const filterLogs = debounce((searchTerm) => {
    setFilter({ text: searchTerm, type: filter.type });
  }, 200);

  return (
    <div className={s.root}>
      <div className={s.tabsContainer}>
        <div className={s.tab}>LOG</div>
        <div className={s.actions}>
          <Input
            className={s.filterText}
            onChange={(e) => filterLogs(e.target.value)}
            placeholder="Filter logs by text"
          />
          <Select
            style={{ width: 115 }}
            defaultValue="all"
            onChange={(value: logType) => updateFilter({ type: value })}
            options={logList}
          />
          <Tooltip title="Clear log" placement="left">
            <span className={s.clearLog} onClick={clearLog}>
              <AppIcon name="Delete" />
            </span>
          </Tooltip>
        </div>
      </div>
      <div className={s.view}>
        <LogView
          text={filter?.text || undefined}
          type={filter.type !== 'all' ? filter.type : undefined}
        />
      </div>
    </div>
  );
};

export default BottomPanel;
