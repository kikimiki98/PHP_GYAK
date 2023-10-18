<!DOCTYPE html>
<html lang="hun">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
        <title>hazi04</title>
    </head>
    <body>
        asd<br>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
            Number: <input type="text" name="num">
            <input type="submit">
        </form>
        <?PHP
            class Interval {
                private $left;
                private $right;

                public function __construct($left, $right) {
                    if (func_num_args() < 2) {
                        throw new ArgumentCountError('Not enough arguments. Two arguments are required.');
                    }
                    if ($left > $right) {
                        throw new InvalidArgumentException('Invalid interval. The left endpoint cannot be greater than the right endpoint.');
                    }
                    $this->left = $left;
                    $this->right = $right;
                    }

                public function __toString() {
                    return "[$this->left, $this->right]";
                    }

                public function contains($num) {
                    if (func_num_args() < 1) {
                        throw new ArgumentCountError('Not enough arguments. One argument is required.');
                        }
                    return $num >= $this->left && $num <= $this->right;
                    }
            }

            try {
                $interval = new Interval(10, 20);
                echo $interval; // prints: [10, 20]
                var_dump($interval->contains(15)); // prints: bool(true)
            } 
            catch (Exception $e) {
                error_log($e->getMessage(), 3, "error_log.txt");
            }
        ?>
    </body>
</html>