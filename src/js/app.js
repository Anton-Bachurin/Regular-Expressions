
export const person = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export const order = ['name', 'level'];

export function orderByProps(obj, order) { 
          const orderedPerson = [];
          const keys = Object.keys(obj).sort();

          for (const key of order) {
            if (obj.hasOwnProperty(key)) {
              orderedPerson.push({ key, value: obj[key]});
            }
          }
          
          for (const key of keys) {
            if (!order.includes(key)) {
              orderedPerson.push({ key, value: obj[key] });
            }
          }
          return orderedPerson;
        }

person.special = [
  {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон'
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...'
  }
]

const { special } = person;

export function specialProps(obj) {
        const specialAttacks = [];
        for (const key of obj) {
          specialAttacks.push({
            id: key.id,
            name: key.name,
            icon: key.icon,
            description: key.description
          });
        }

        if (specialAttacks.description === undefined) {
          specialAttacks.description = 'Описание недоступно';
        }
        return specialAttacks;
      }

console.log(specialProps(special));
        




