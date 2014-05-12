//OPTION #1
//<PSEUDOCODE FOR FUNCTIONS SUM,MEAN, & MEDIAN  WITHOUT PARAMETERS>

//	SET sum, mean, median to 0
//	SET numberArray as an empty array

//	INIT function for sum of numberArray
//		OBTAIN user input
//		WHILE input is not "done"
//			PUSH input to numberArray
//		END WHILE
//		FOR each number in numberArray
//			INCREMENT sum by numberArray[number]
//			PRINT sum
//		END FOR
//	END function


//	INIT function for mean of numberArray
//		OBTAIN user input
//		WHILE input is not "done"
//			PUSH input to numberArray
//		END WHILE
//		FOR each number in numberArray
//			INCREMENT sum by numberArray[number]
//			DIVIDE sum by length of numberArray
//			PRINT sum as average
//		END FOR
//	END function


//	INIT function for median of numberArray
//		OBTAIN user input
//		WHILE input is not "done"
//			PUSH input to numberArray
//		END WHILE
//		SORT numberArray
//		IF length of numberArray is even
//			SET x to length of numberArray divided by 2
//			SET y to numberArray[x-1] + numberArray[x]
//			DIVIDE y by 2
//			PRINT y
//		ELSE
//			SET x to numberArray.length divided by 2 MINUS 0.5
//			PRINT numberArray[x]
//		END IF
//	END function



// OPTION #2
// <PSEUDOCODE FOR SUM,MEAN,& MEDIAN CALLED AFTER ACQUIRING SET OF NUMBERS>

//	SET sum,mean,median to 0
//	SET numberArray as an empty array
//	SET choices as empty string

//	WHILE input from user is not "done"
//		AQUIRE number input from user
//		PUSH input to numberArray
//		STORE numberArray
//	END WHILE
//

//	WHILE choice does not equal "sum", "mean", or "median"
//		PROMPT user for choices: "sum", "mean", & "median"
//		convert choices to lower case
//		STORE choice as user input
//	END WHILE

//	IF user choice equals "sum"
//		INIT function for sum of numberArray
//			FOR each number in numberArray
//				INCREMENT sum by numberArray[number]
//				PRINT sum
//			END FOR
//		END function
//	ELSE IF user choice equals "mean"
//		INIT function for mean of numberArray
//			FOR each number in numberArray
//				INCREMENT sum by numberArray[number]
//				DIVIDE sum by length of numberArray
//				PRINT sum as average
//			END FOR
//		END function
//	ELSE IF user choice equals "median"
//		INIT function for median of numberArray
//			IF length of numberArray is even
//				SET x to length of numberArray divided by 2
//				SET y to numberArray[x-1] + numberArray[x]
//				DIVIDE y by 2
//				PRINT y
//			ELSE
//				SET x to numberArray.length divided by 2 MINUS 0.5
//				PRINT numberArray[x]
//			END IF
//		END function
//	ELSE
//		PRINT "Error. Enter either 'sum', 'mean', or 'median'"
//	END IF