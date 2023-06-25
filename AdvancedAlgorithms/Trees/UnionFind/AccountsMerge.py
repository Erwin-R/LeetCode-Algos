class UnionFind: 
    def __init__(self, n):
        self.par = [i for i in range(n)]
        self.rank = [1] * n
        

    def find(self, n):
        while n != self.par[n]:
            self.par[n] = self.par[self.par[n]]
            n = self.par[n]
        return n
    
    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2:
            return False

        if self.rank[p1] > self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
        
        return True


class Solution:
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:

        uf = UnionFind(len(accounts))
        emailToAcc = {} #link emails to index of account

        #enumerate gets index and value of index at the same time
        # a gives the account(names and emails associated)
        for i, a in enumerate(accounts):
            #start at first index since name is always the 0th index
            # e gives the email
            for e in a[1:]:
                if e in emailToAcc:
                    #want to see if we can make a union with new index(i) that has same email with email in hashmap with previous index(emailToAcc[e])
                    uf.union(i, emailToAcc[e])
                else: 
                    emailToAcc[e] = i

        #now we have the disjointed sets of the indexes that share the same email (group of accounts that share the same email)
        #now we need to merge the accounts
        print(emailToAcc)
        # Take index of account and map it to its list of emails
        emailGroup = defaultdict(list) #index of acc -> list of emails
        
        #sift through the hashmap with email and index (key value pair)
        for e, i in emailToAcc.items():
            leader = uf.find(i)

            emailGroup[leader].append(e)
        
        print(emailGroup)

        res = []
        for i, emails in emailGroup.items():
            print(i, emails)
            name = accounts[i][0]
            res.append([name] + sorted(emailGroup[i])) #concatenating the name with the array of emails in emailGroup at index i 

        return res 
