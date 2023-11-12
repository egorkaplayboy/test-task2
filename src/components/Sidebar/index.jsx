import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [selectedFilters, setSelectedFilters] = React.useState([]);
  const [rotations, setRotations] = React.useState({});

  const handleCategoryClick = (category) => {
    setRotations((prevRotations) => ({
      ...prevRotations,
      [category]: (prevRotations[category] || 0) + 180,
    }));

    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((selected) => selected !== category)
        : [...prevSelected, category]
    );
  };

  const handleFilterClick = (filter) => {
    setRotations((prevRotations) => ({
      ...prevRotations,
      [filter]: (prevRotations[filter] || 0) + 180,
    }));

    setSelectedFilters((prevSelected) =>
      prevSelected.includes(filter)
        ? prevSelected.filter((selected) => selected !== filter)
        : [...prevSelected, filter]
    );
  };
  const data = [
    {
      id: 8,
      title: "Помещения",
      sidebar_filters: {
        "Популярные фильтры": {
          Вместимость: {
            type: "radio",
            name: "count_peoples__contains",
            values: [
              {
                name: "До 20 человек",
                state: false,
              },
              {
                name: "От 20 до 50",
                state: false,
              },
              {
                name: "Больше 50",
                state: true,
              },
            ],
          },
          "Площадь (кв.м)": {
            type: "range",
            name: "square__lte",
            values: [
              {
                min: 30,
                max: 225,
                from: 123,
                step: 5,
                state: 123,
              },
            ],
          },
        },
        Дополнительно: {
          Зонирование: {
            type: "checkbox",
            name: "zoning__contains",
            values: [
              {
                name: "Место для игр",
                state: false,
              },
              {
                name: "Место для переодевания",
                state: false,
              },
              {
                name: "Место для красивых фото",
                state: false,
              },
              {
                name: "Тихий уголок для взрослых",
                state: false,
              },
            ],
          },
          Условия: {
            type: "checkbox",
            name: "conditions__contains",
            values: [
              {
                name: "Закрывается под нас",
                state: true,
              },
              {
                name: "Отдельный вход",
                state: false,
              },
              {
                name: "Можно со своей едой",
                state: false,
              },
              {
                name: "Можно со своим фотографом/аниматором",
                state: false,
              },
              {
                name: "Можно украсить самим",
                state: false,
              },
              {
                name: "Уборка после включена",
                state: false,
              },
            ],
          },
        },
      },
    },
  ];

  return (
    <div className={s.sidebar}>
      <span className={s.sidebar__header}>Параметры подбора</span>
      <div className={s.sidebar__date}>
        <span className={s.sidebar__date_header}>Дата и время праздника</span>
        <div className={s.sidebar__date_picker}>
          <input type="date" value="2021-02-02" />
        </div>
      </div>
      <div className={s.sidebar__time}>
        <div className={s.sidebar__time_start}>
          <span className={s.sidebar__time_header}>Начнем в</span>
          <div>
            <input type="time" defaultValue="10:00" />
          </div>
        </div>
        <div className={s.sidebar__time_end}>
          <span className={s.sidebar__time_header}>Закончим в</span>
          <div>
            <input type="time" defaultValue="12:00" />
          </div>
        </div>
      </div>
      <div className={s.sidebar__area}>
        <span className={s.sidebar__area_header}>Район</span>
        <div className={s.sidebar__area_select}>
          <select name="" id="">
            <option value="any">Любой</option>
            <option value="admiralteisky">Адмиралтейский</option>
            <option value="vasileostrovsky">Василеостровский</option>
          </select>
        </div>
      </div>
      <div className={s.filters}>
        {data.map((item) => (
          <div key={item.id}>
            {Object.keys(item.sidebar_filters).map((category) => (
              <div key={category}>
                <div
                  className={s.filters__category}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: `rotate(${rotations[category] || 0}deg)`,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <path
                      d="M5.34654e-05 0.995538C-0.000345172 1.12361 0.0255585 1.25016 0.075862 1.36588C0.126165 1.48159 0.199591 1.58354 0.290741 1.66423L5.00458 5.80498C5.14516 5.93107 5.32149 6 5.50346 6C5.68544 6 5.86177 5.93107 6.00235 5.80498L10.7162 1.51849C10.8766 1.37297 10.9775 1.16387 10.9967 0.937177C11.0158 0.710485 10.9517 0.484775 10.8183 0.3097C10.685 0.134626 10.4933 0.0245285 10.2856 0.00362777C10.0779 -0.017273 9.87101 0.0527353 9.71057 0.198252L5.49954 4.03037L1.2885 0.326846C1.17318 0.222013 1.03276 0.155421 0.883841 0.13495C0.734923 0.114478 0.583747 0.140983 0.448202 0.211329C0.312658 0.281675 0.198417 0.392918 0.118997 0.531895C0.0395756 0.670871 -0.00169939 0.831765 5.34654e-05 0.995538Z"
                      fill="#2B2B2B"
                    />
                  </svg>
                </div>
                {selectedCategories.includes(category) && (
                  <div>
                    {Object.keys(item.sidebar_filters[category]).map(
                      (filter) => (
                        <div key={filter}>
                          <h4
                            className={s.filters__filter}
                            onClick={() => handleFilterClick(filter)}
                          >
                            {filter}
                            <svg
                              width="11"
                              height="6"
                              viewBox="0 0 11 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                transform: `rotate(${
                                  rotations[filter] || 0
                                }deg)`,
                                transition: "transform 0.3s ease",
                              }}
                            >
                              <path
                                d="M5.34654e-05 0.995538C-0.000345172 1.12361 0.0255585 1.25016 0.075862 1.36588C0.126165 1.48159 0.199591 1.58354 0.290741 1.66423L5.00458 5.80498C5.14516 5.93107 5.32149 6 5.50346 6C5.68544 6 5.86177 5.93107 6.00235 5.80498L10.7162 1.51849C10.8766 1.37297 10.9775 1.16387 10.9967 0.937177C11.0158 0.710485 10.9517 0.484775 10.8183 0.3097C10.685 0.134626 10.4933 0.0245285 10.2856 0.00362777C10.0779 -0.017273 9.87101 0.0527353 9.71057 0.198252L5.49954 4.03037L1.2885 0.326846C1.17318 0.222013 1.03276 0.155421 0.883841 0.13495C0.734923 0.114478 0.583747 0.140983 0.448202 0.211329C0.312658 0.281675 0.198417 0.392918 0.118997 0.531895C0.0395756 0.670871 -0.00169939 0.831765 5.34654e-05 0.995538Z"
                                fill="#2B2B2B"
                              />
                            </svg>
                          </h4>
                          {selectedFilters.includes(filter) && (
                            <div>
                              {item.sidebar_filters[category][
                                filter
                              ].values.map((value) => (
                                <div
                                  className={s.filters__filter_option}
                                  key={value.name}
                                >
                                  <label>
                                    <input
                                      type={
                                        item.sidebar_filters[category][filter]
                                          .type
                                      }
                                      name={
                                        item.sidebar_filters[category][filter]
                                          .name
                                      }
                                      checked={value.state}
                                      min={value?.min}
                                      max={value?.max}
                                      step={value?.step}
                                      defaultValue={value.state}
                                    />
                                    <span>{value.name}</span>
                                  </label>
                                  <div
                                    className={s.filters__filter_option_info}
                                  >
                                    <span>{value?.min}</span>
                                    <span>{value?.max}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
