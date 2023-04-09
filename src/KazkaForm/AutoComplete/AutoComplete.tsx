import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./AutoComplete.scss";
import SelectOption from "./SelectOption/SelectOption";

const hashtags = [
  {
    id: 1,
    name: {
      en: "adidas",
      ru: "адидас",
    },
    value: "adidas",
  },
  {
    id: 2,
    name: {
      en: "blabla",
      ru: "блабла",
    },
    value: "bleblu",
  },
  {
    id: 3,
    name: {
      en: "bleble",
      ru: "блебле",
    },
    value: "blabla",
  },
];

const AutoSelect = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      autocomplete: "",
    },
  });

  const [value, setValue] = useState("");

  const [menuItems, setMenuItems] = useState<any>([]);

  useEffect(() => {
    const subscription = watch((value) =>
      setValue(value["autocomplete"] as string)
    );
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setMenuItems(() =>
      hashtags.filter((el) => {
        const ru = el.name.ru.toLowerCase();
        const en = el.name.en.toLowerCase();
        const currentValue = value.toLowerCase();

        if (currentValue) {
          if (ru.includes(currentValue)) {
            return el;
          } else if (en.includes(currentValue)) {
            return el;
          }
        }
      })
    );
  }, [value]);

  console.log(menuItems);

  return (
    <>
      <input
        autoCapitalize="false"
        type="text"
        autoComplete="false"
        {...register("autocomplete", {
          minLength: 2,
        })}
        placeholder="autocomplete"
      />
      <div className="selectList">
        {menuItems.length > 0 && (
          <>
            {menuItems.map((el: any) => {
              return <SelectOption key={el.id} value={el.name.ru} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default AutoSelect;
