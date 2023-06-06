        #nums = [5,2,3,4]
        #prefix = [1,1,1,1]
        #postfix = [1,1,1,1]
        #output = [1,1,1,1]

        #output should be: [24, 60, 40, 30]
        #Prefix While Loop
        # L = 1
        # prefix[1] = prefix[1 - 1] * nums[1 - 1] = 1 * 5 = 5
        # prefix = [1,5,1,1]

        # L = 2
        # prefix[2] = prefix[2 - 1] * nums[2 - 1] = 5 * 2 = 10
        # prefix = [1,5,10,1]

        # L = 3
        # prefix[3] = prefix[3 - 1] * nums[3 - 1] = 10 * 3 = 30
        # prefix = [1,5,10,30]

        #Postfix While Loop
        # R = 2
        # postfix[2] = postfix[2 + 1] * nums[2 + 1] = 1 * 4 = 4
        # postfix = [1,1,4,1]

        # R = 1
        # postfix[1] = postfix[1 + 1] * nums[1 + 1] = 4 * 3 = 12
        # postfix = [1,12,4,1]

        # R = 0
        # postfix[0] = postfix[0 + 1] * nums[0 + 1] = 12 * 2 = 24
        # postfix = [24,12,4,1]

        # prefix = [1,5,10,30]
        # postfix = [24,12,4,1]
        #Output Array loop
        #  ouput[0] = prefix[0] * postfix[0] = 1 * 24 = 24
        #  ouput[1] = prefix[1] * postfix[1] = 5 * 12 = 60
        #  ouput[2] = prefix[2] * postfix[2] = 10 * 4 = 40
        #  ouput[3] = prefix[3] * postfix[3] = 30 * 1 = 30