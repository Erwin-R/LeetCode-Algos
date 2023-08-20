#Time: 
#Space: 

class Solution:
    def alienOrder(self, words: List[str]) -> str:
        adj = {c: set() for w in words for c in w}

        #This for loop is used to build the adjacency list
        for i in range(len(words) - 1):
            #compare length of words  
            w1, w2 = words[i], words[i + 1]
            minLen = min(len(w1), len(w2))
            #for words with same prefixes, for example if "apes" was sorted before "ape"
            #then we would return since it is not sorted correctly so there is no valid arrangement
            if len(w1) > len(w2) and w1[:minLen] == w2[:minLen]:
                return ""
            
            #if words dont have the same prefix then we compare the words letter by letter
            for j in range(minLen): 
                #if letters are not the same then we know that the letter from w1 comes before letter in w2
                #only want the first differing characters
                if w1[j] != w2[j]:
                    adj[w1[j]].add(w2[j])
                    break

        visited = {}  # {char: bool} False visited, True current path
        res = []

        #we will do dfs in post order traversal to make sure we reach all nodes in the correct order
        #for example if we traversed normally -> in (c <- a -> b -> c) we might reach c first 
        # even though b is supposed to go after a. Postorder dfs will give our answer in the reversed order 
        
        def dfs(char): 
            if char in visited: 
                return visited[char] 

            #want to mark characters we are currently visiting as True
            visited[char] = True

            #go through the neighbors of each character
            for neiChar in adj[char]: 
                if dfs(neiChar):
                    return True
            
            #Once we are done going through all neighbors or no neighbors mark as false
            #since char has been visited
            visited[char] = False
            res.append(char)

        for char in adj: 
            if dfs(char):
                return ""

        res.reverse()
        #joining with no spaces between letters
        return "".join(res)