# minecraft-species-namer
Taking in a pair of minecraft-related keywords, the species namer will create a species name using bad latin translations

# examples
| Input          | Output           |
|----------------|------------------|
| 'stone miner'  | 'lapimetallicus' |
| 'item dropper' | 'resdejectus'    |
| 'dirt breaker' | 'luturuptor'     |

# usage
1. Install node.js
2. Download the repository
3. run `node namer.js [input]` in a command prompt or call the createSpeciesName function from another file

The program will return a string if it is succesful (e.g. `tardacursor`)

# errors
If you get the `Invalid args` error, make sure the input is a string with a space or an array of strings with a length of 2.

If you get the `No translation found` error, one of the words in the input has not corrisponding translation. Consider translating it and making a pull request!
