# Quelques améliorations

1.  j'ai créé un fichier package.json qui sert à configurer le projet notemment qui me permet d'utiliser `import ... from './data.js'` à la place de `require`

```json
"type": "module",
```

2.  j'ai séparé la liste import monsterArray dans un fichier à part `data.js`, que j'emporte comme suit :

```js
import monsterArray from "./data.js";
```

3.  j'ai séparé la partie de code qui sert à créer une carte monster , dans une fonction `createElement`, dans un autre fichier que j'emporte comme suit

```js
import { createElement } from "./functions.js";
```

# quelques propistions et challenges

1. Si je clic plusieurs fois sur le button `C'est l'heure du Duel !`, le mp3 spammé est insupportable, tu peux trouver un astuce pour bloquer le spam, comme par exemple ,. quand tu cliques, tu rends le button `disabled` et pui `enabled` après 5 secondes?
