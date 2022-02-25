//pour l'installation -> npm i typescript webpack webpack-cli ts-loader
//npx webpack --watch

import { Heroes } from './Heroes'

const heroes = new Heroes()




/*###########################################################
#                                                           #
#--------------------Les décorteurs         ----------------#
#                                                           #
#############################################################*/

/*
Pour commencer il faudra ajouter le drapeau de configuration 
        "experimentalDecorators": true
dans le fichier de configuration de ts

les décorateurs vous nous permettrent de rajouter des métadonnée avec un comportement spécifique 

pour permettre de les comprendre, ajoutons directement un décorateur, créons un cas concrèt dans le web, 
nous allons créer nos propre tag html, comme dans beaucoup de framework front
*/
/*
function CustomElement(name : string)
{
    return function(constructor : typeof HTMLElement){
        customElements.define(name, constructor)
    }
}

@CustomElement("demo-test")
class Demo extends HTMLElement{
    connectedCallback () {
        this.innerHTML = "Bonjour à tous"
    }
}
*/

/* explication
on étant une class de html element pour pouvoir use inner text
on a décorer la class d'une méthode decorateur,
cette méthode prendra un paramètre de type string, name -> demo-test


la methode dois avoir un return, un return de fonction, 
cette méthode en elle meme devra recevoir le type direct 
de ce htmlelement, on aura plus qu'a dedans define, le nouveau
tag html.

connectedCallback est appeler directement quand le custom element
est appeler pour la première fois.
*/


/*
On peux égalament, par exemple, créer un décorateur de propriété
qui ferais de la validation


*/
/*
function Constraint({min, max} : {min : number, max : number})
{
    //si on veux rester générique
    
    return function(target : Users, key : keyof Users){

    }

    return function (target : Users, key : 'age'){

    }
    //ici c'est totalement utilisable uniquement sur une prop de age

    //ou alors avec des générique total
    return function<T>(target : T, key : keyof T)
    {
        let val = target[key] as any

        const getter = () => {
            return val
        }

        const setter = (v : unknown) => {

            console.log(v)
            if(typeof v === 'number' &&
                v > min && v < max)
            {
                val = v
                return
            }

            throw new Error(`on attend un nombre entre ${min} et ${max}`)
        }

        Object.defineProperty(target, key, {
            set : setter,
            get : getter
        })
    }
}

class Users{

    @Constraint({min : 0, max: 100})
    age : number
}

const u = new Users()
u.age = 50
*/



//un dernier exemple bien utile est le fait de pouvoir sceller un class,
/*
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}*/