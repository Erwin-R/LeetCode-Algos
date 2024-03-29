#Time: O(n * k) where n is number of words inserted into the trie and k is the average length of the strings 
#Space: O(n)

class TrieNode:
    def __init__(self): 
        self.children = {}
        self.word = False


class Trie:
    def __init__(self):
        self.root = TrieNode()
        

    def insert(self, word: str) -> None:
        curr = self.root

        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]

        curr.word = True         

    def search(self, word: str) -> bool:
        curr = self.root

        for c in word:
            if c not in curr.children: 
                return False
            curr = curr.children[c]
        
        return curr.word
        
    def startsWith(self, prefix: str) -> bool:
        curr = self.root

        for c in prefix:
            if c not in curr.children:
                return False
            curr = curr.children[c]

        return True